"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Upload, ActivityIcon, Loader2, CheckCircle, AlertCircle
} from "lucide-react"

export default function AnalysisPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [userEmail, setUserEmail] = useState<string>("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleAnalysis = async () => {
    if (!selectedFile) return

    setIsAnalyzing(true)
    setResults(null)

    try {
      const formData = new FormData()
      formData.append("image", selectedFile)
     

      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        setResults(data)
      } else {
        setResults({
          confidence: 0,
          findings: ["Failed to analyze image."],
          recommendations: ["Ensure image format is correct."],
          riskLevel: "Unknown",
          diagnosis: "Unknown",
          analysisDate: new Date().toLocaleDateString(),
          processingTime: "0.0 seconds",
        })
      }
    } catch (error) {
      console.error("Error during analysis:", error)
      setResults({
        confidence: 0,
        findings: ["Error connecting to backend server."],
        recommendations: ["Ensure Flask API is running on port 5000."],
        riskLevel: "Unknown",
        diagnosis: "Unknown",
        analysisDate: new Date().toLocaleDateString(),
        processingTime: "0.0 seconds",
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  const resetAnalysis = () => {
    setSelectedFile(null)
    setResults(null)
    setUserEmail("")
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
      setPreviewUrl(null)
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-blue-100/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">AI Medical Image Analysis</h1>
          <p className="text-xl text-blue-700">Upload your heart MPI for instant AI-powered analysis</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="h-5 w-5 text-blue-600" />
                <span>Upload MPI Image</span>
              </CardTitle>
              <CardDescription>Select MPI image for analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
             
              <div>
                <Label htmlFor="file-upload">Choose Image File</Label>
                <Input
                  id="file-upload"
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/bmp,image/*,.dcm"
                  onChange={handleFileChange}
                />
              </div>

              {selectedFile && previewUrl && (
                <div className="border-2 border-dashed border-blue-300 rounded-lg p-4">
                  <div className="w-full h-48 bg-gray-50 rounded flex items-center justify-center">
                    <img src={previewUrl} alt="Preview" className="max-h-40 object-contain" />
                  </div>
                </div>
              )}

              <div className="flex space-x-3">
                <Button onClick={handleAnalysis} disabled={!selectedFile || isAnalyzing} className="flex-1">
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-3 h-5 w-5 animate-spin" /> Analyzing...
                    </>
                  ) : (
                    <>
                      <ActivityIcon className="mr-2 h-5 w-5" /> Start Analysis
                    </>
                  )}
                </Button>

                {selectedFile && (
                  <Button onClick={resetAnalysis} variant="outline">
                    Reset
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Analysis Results</span>
              </CardTitle>
              <CardDescription>AI-powered insights from your medical image</CardDescription>
            </CardHeader>
            <CardContent>
              {!results && !isAnalyzing && (
                <div className="text-center py-16 text-gray-500">
                  <p className="text-lg font-medium mb-2">Ready for Analysis</p>
                  <p className="text-sm">Upload an image and start analysis to see results</p>
                </div>
              )}

              {isAnalyzing && (
                <div className="text-center py-16">
                  <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
                  <p className="text-lg font-medium text-blue-700">AI is analyzing your image...</p>
                </div>
              )}

              {results && (
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="text-4xl font-bold text-green-600 mb-2">{results.confidence}%</div>
                    <p className="text-sm text-gray-600 font-medium">AI Confidence Score</p>
                    <p className="text-xs text-gray-500 mt-1">Processed in {results.processingTime}</p>
                  </div>

                  <div className="text-center mt-4 text-lg font-semibold text-blue-800">
                    Diagnosis: {results.diagnosis}
                  </div>

                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-2" /> Key Findings
                    </h3>
                    <div className="space-y-2">
                      {results.findings.map((finding: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                          <span className="text-sm text-gray-700">{finding}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" /> Recommendations
                    </h3>
                    <div className="space-y-2">
                      {results.recommendations.map((rec: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                          <span className="text-sm text-gray-700">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            results.riskLevel === "Low"
                              ? "bg-green-500"
                              : results.riskLevel === "Medium"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                        />
                        <span className="font-medium text-gray-900">Risk Level: {results.riskLevel}</span>
                      </div>
                      <span className="text-xs text-gray-500">{results.analysisDate}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button onClick={() => window.print()} variant="outline">
                      Print Report
                    </Button>
                    <Button onClick={resetAnalysis} className="bg-green-600 text-white">
                      New Analysis
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
