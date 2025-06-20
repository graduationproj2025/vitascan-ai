"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Users, Activity, Brain, TrendingUp, AlertTriangle, Calendar, FileText, Clock, CheckCircle } from "lucide-react"

// Mock data for dashboard analytics
const monthlyAnalyses = [
  { month: "Jan", lung: 45, heart: 32, both: 23 },
  { month: "Feb", lung: 52, heart: 41, both: 35 },
  { month: "Mar", lung: 48, heart: 38, both: 42 },
  { month: "Apr", lung: 61, heart: 45, both: 38 },
  { month: "May", lung: 55, heart: 52, both: 45 },
  { month: "Jun", lung: 67, heart: 48, both: 52 },
]

const confidenceScores = [
  { range: "90-100%", count: 156 },
  { range: "80-89%", count: 89 },
  { range: "70-79%", count: 34 },
  { range: "60-69%", count: 12 },
  { range: "<60%", count: 3 },
]

const riskDistribution = [
  { name: "Low Risk", value: 234, color: "#10B981" },
  { name: "Medium Risk", value: 45, color: "#F59E0B" },
  { name: "High Risk", value: 15, color: "#EF4444" },
]

const recentActivity = [
  {
    time: "2 hours ago",
    user: "Dr. Sarah Ahmed",
    action: "Completed lung analysis",
    result: "Normal",
    icon: CheckCircle,
    color: "text-green-600",
  },
  {
    time: "4 hours ago",
    user: "Dr. Mohammed Ali",
    action: "Heart analysis",
    result: "Abnormal - Follow-up needed",
    icon: AlertTriangle,
    color: "text-orange-600",
  },
  {
    time: "6 hours ago",
    user: "Dr. Fatima Hassan",
    action: "Comprehensive analysis",
    result: "Normal",
    icon: CheckCircle,
    color: "text-green-600",
  },
  {
    time: "8 hours ago",
    user: "Dr. Omar Khalil",
    action: "Lung analysis",
    result: "Mild opacity detected",
    icon: AlertTriangle,
    color: "text-yellow-600",
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-blue-100/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Analytics Dashboard</h1>
          <p className="text-blue-700">Real-time insights from VitaScan AI medical imaging analysis</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">427</div>
              <p className="text-xs text-green-600 flex items-center">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Analyses</CardTitle>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Activity className="h-4 w-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">846</div>
              <p className="text-xs text-green-600 flex items-center">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +18% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Confidence</CardTitle>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Brain className="h-4 w-4 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">95%</div>
              <p className="text-xs text-green-600 flex items-center">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +2.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Risk Cases</CardTitle>
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">15</div>
              <p className="text-xs text-red-600">Requires immediate attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Monthly Analysis Trends */}
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Monthly Analysis Trends</CardTitle>
              <CardDescription>Analysis volume by type over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  lung: {
                    label: "Lung Analysis",
                    color: "hsl(var(--chart-1))",
                  },
                  heart: {
                    label: "Heart Analysis",
                    color: "hsl(var(--chart-2))",
                  },
                  both: {
                    label: "Comprehensive",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyAnalyses}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="lung" fill="var(--color-lung)" name="Lung" />
                    <Bar dataKey="heart" fill="var(--color-heart)" name="Heart" />
                    <Bar dataKey="both" fill="var(--color-both)" name="Both" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Risk Distribution */}
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Risk Level Distribution</CardTitle>
              <CardDescription>Patient risk categorization from recent analyses</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  low: {
                    label: "Low Risk",
                    color: "#10B981",
                  },
                  medium: {
                    label: "Medium Risk",
                    color: "#F59E0B",
                  },
                  high: {
                    label: "High Risk",
                    color: "#EF4444",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={riskDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {riskDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Confidence Scores and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Confidence Score Distribution */}
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Confidence Score Distribution</CardTitle>
              <CardDescription>AI confidence levels across all analyses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {confidenceScores.map((score, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-600 rounded" />
                      <span className="text-sm font-medium">{score.range}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(score.count / 294) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-8">{score.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest analyses performed by medical professionals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const IconComponent = activity.icon
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <IconComponent className={`h-4 w-4 ${activity.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-blue-900">{activity.user}</p>
                        <p className="text-sm text-gray-600">{activity.action}</p>
                        <p className={`text-xs font-medium ${activity.color}`}>{activity.result}</p>
                        <div className="flex items-center mt-1">
                          <Clock className="h-3 w-3 text-gray-400 mr-1" />
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Today's Analyses</p>
                  <p className="text-3xl font-bold">127</p>
                </div>
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Reports Generated</p>
                  <p className="text-3xl font-bold">89</p>
                </div>
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Avg Processing Time</p>
                  <p className="text-3xl font-bold">2.4s</p>
                </div>
                <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
