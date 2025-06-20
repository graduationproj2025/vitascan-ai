"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Upload, FileImage, ActivityIcon, Heart, Loader2, CheckCircle, AlertCircle, ImageIcon } from "lucide-react"

export default function AnalysisPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [analysisType, setAnalysisType] = useState("both")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)

      // Create preview URL for the selected image
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleAnalysis = async () => {
    if (!selectedFile) return

    setIsAnalyzing(true)
    setResults(null)

    // Simulate AI analysis with realistic delay
    setTimeout(() => {
      const mockResults = {
        confidence: Math.floor(Math.random() * 10) + 90, // 90-99%
        findings: [
          "Normal lung fields with clear bilateral expansion",
          "Cardiac silhouette within normal limits",
          "No acute cardiopulmonary abnormalities detected",
          "Diaphragm and costophrenic angles appear normal",
        ],
        recommendations: [
          "Continue routine monitoring",
          "Annual follow-up recommended",
          "Maintain current health regimen",
          "No immediate intervention required",
        ],
        riskLevel: "Low",
        analysisDate: new Date().toLocaleDateString(),
        processingTime: "2.3 seconds",
      }
      setResults(mockResults)
      setIsAnalyzing(false)
    }, 3000)
  }

  const resetAnalysis = () => {
    setSelectedFile(null)
    setResults(null)
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
                <span>Upload X-ray Image</span>
              </CardTitle>
              <CardDescription>Select MPI image for analysis (JPEG, PNG, DICOM supported)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="file-upload" className="text-sm font-medium text-gray-700">
                  Choose Image File
                </Label>
                <div className="mt-1">
                  <Input
                    id="file-upload"
                    type="file"
                    accept="image/*,.dcm"
                    onChange={handleFileChange}
                    className="border-blue-200 focus:border-blue-500"
                  />
                </div>
              </div>

              {selectedFile && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                    <FileImage className="h-5 w-5 text-blue-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-800">{selectedFile.name}</p>
                      <p className="text-xs text-blue-600">Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>

                  {previewUrl && (
                    <div className="border-2 border-dashed border-blue-300 rounded-lg p-4">
                      <div className="w-full h-48 bg-gray-50 rounded flex items-center justify-center">
                        <div className="text-center">
                          <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Image Preview</p>
                          <p className="text-xs text-gray-500">{selectedFile.name}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div>
                <Label className="text-base font-medium text-gray-700">Analysis Type</Label>
                <RadioGroup value={analysisType} onValueChange={setAnalysisType} className="mt-3">
                  <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-blue-50">
                    <RadioGroupItem value="lung" id="lung" />
                    <Label htmlFor="lung" className="flex items-center space-x-2 cursor-pointer flex-1">
                      <ActivityIcon className="h-4 w-4 text-blue-600" />
                      
                      <div>
                        <p className="font-medium">Heart Analysis</p>
                        <p className="text-xs text-gray-500">Focus on cardiac conditions</p>
                      </div>
                    </Label>
                  </div>
                  
                </RadioGroup>
              </div>

              <div className="flex space-x-3">
                <Button
                  onClick={handleAnalysis}
                  disabled={!selectedFile || isAnalyzing}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <ActivityIcon className="mr-2 h-5 w-5" />
                      Start Analysis
                    </>
                  )}
                </Button>

                {selectedFile && (
                  <Button
                    onClick={resetAnalysis}
                    variant="outline"
                    className="border-gray-300 text-gray-600 hover:bg-gray-50"
                  >
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
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <FileImage className="h-12 w-12 text-gray-400" />
                  </div>
                  <p className="text-lg font-medium mb-2">Ready for Analysis</p>
                  <p className="text-sm">Upload an image and start analysis to see results</p>
                </div>
              )}

              {isAnalyzing && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
                  </div>
                  <p className="text-lg font-medium text-blue-700 mb-2">AI is analyzing your image...</p>
                  <p className="text-sm text-gray-600">This may take a few moments</p>
                  <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: "70%" }}></div>
                  </div>
                </div>
              )}

              {results && (
                <div className="space-y-6">
                  {/* Confidence Score */}
                  <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="text-4xl font-bold text-green-600 mb-2">{results.confidence}%</div>
                    <p className="text-sm text-gray-600 font-medium">AI Confidence Score</p>
                    <p className="text-xs text-gray-500 mt-1">Processed in {results.processingTime}</p>
                  </div>

                  {/* Key Findings */}
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Key Findings
                    </h3>
                    <div className="space-y-2">
                      {results.findings.map((finding: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{finding}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Recommendations
                    </h3>
                    <div className="space-y-2">
                      {results.recommendations.map((rec: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Risk Assessment */}
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

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button
                      onClick={() => window.print()}
                      variant="outline"
                      className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      Print Report
                    </Button>
                    <Button
                      onClick={resetAnalysis}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                    >
                      New Analysis
                    </Button>
                  </div>

                  {/* Disclaimer */}
                  <div className="text-xs text-gray-500 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <strong className="text-yellow-800">Medical Disclaimer:</strong> This AI analysis is for
                    informational purposes only and should not replace professional medical diagnosis. Please consult
                    with a qualified healthcare provider for proper medical evaluation and treatment decisions.
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
