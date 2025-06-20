"use client"

import type React from "react"
import emailjs from 'emailjs-com'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Wrench,
  Handshake,
  DollarSign,
  BookOpen,
  MessageSquare,
  Globe,
  Shield,
  Zap,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  emailjs
    .send(
      'service_uvp27kd',         // Service ID
      'template_p3mh54k',        // Template ID
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'Q9HM1M8tW3Yhd3OOH'        // Public Key
    )
    .then(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    })
    .catch((error) => {
      console.error('EmailJS Error:', error)
      setIsSubmitting(false)
      alert('An Error occured, try again later.')
    })
}


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-blue-100/50">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-green-800 mb-4">Message Sent Successfully!</h1>
              <p className="text-gray-600 mb-6">
                Thank you for contacting VitaScan AI. We've received your message and will get back to you within 24
                hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                >
                  Send Another Message
                </Button>
                <Button variant="outline" onClick={() => (window.location.href = "/")}>
                  Return to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-blue-100/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Contact VitaScan AI</h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Get in touch with our team for support, partnerships, or any questions about our AI-powered medical imaging
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <span>Get in Touch</span>
                </CardTitle>
                <CardDescription>We're here to help and answer any questions you might have.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">Phone</p>
                    <p className="text-blue-700 font-semibold">+962 790924378</p>
                    <p className="text-sm text-gray-600">Mon-Fri 8AM-6PM (GMT+3)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-green-900">Email</p>
                    <p className="text-green-700 font-semibold">gradproj20256@gmail.com</p>
                    <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-purple-900">Location</p>
                    <p className="text-purple-700 font-semibold">Amman, Jordan</p>
                    <p className="text-sm text-gray-600">Middle East & North Africa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-orange-900">Business Hours</p>
                    <p className="text-orange-700 font-semibold">Sunday - Thursday</p>
                    <p className="text-sm text-gray-600">8:00 AM - 6:00 PM (GMT+3)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Types */}
            <Card className="mt-6 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>Support Types</span>
                </CardTitle>
                <CardDescription>Choose the type of support you need</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                    <div className="flex items-center space-x-2 mb-2">
                      <Wrench className="h-5 w-5 text-blue-600" />
                      <h3 className="font-medium text-blue-900">Technical Support</h3>
                    </div>
                    <p className="text-sm text-blue-700">Help with platform usage and troubleshooting</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                    <div className="flex items-center space-x-2 mb-2">
                      <Handshake className="h-5 w-5 text-green-600" />
                      <h3 className="font-medium text-green-900">Partnership Inquiries</h3>
                    </div>
                    <p className="text-sm text-green-700">Collaboration and integration opportunities</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                    <div className="flex items-center space-x-2 mb-2">
                      <DollarSign className="h-5 w-5 text-purple-600" />
                      <h3 className="font-medium text-purple-900">Sales & Pricing</h3>
                    </div>
                    <p className="text-sm text-purple-700">Information about our plans and pricing</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                    <div className="flex items-center space-x-2 mb-2">
                      <BookOpen className="h-5 w-5 text-orange-600" />
                      <h3 className="font-medium text-orange-900">Training & Education</h3>
                    </div>
                    <p className="text-sm text-orange-700">Learning resources and training programs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-blue-600" />
                  <span>Send us a Message</span>
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-blue-200 focus:border-blue-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-blue-200 focus:border-blue-500"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-blue-200 focus:border-blue-500"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="border-blue-200 focus:border-blue-500 min-h-[120px]"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 py-3 text-lg font-semibold hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="mt-6 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <span>Frequently Asked Questions</span>
                </CardTitle>
                <CardDescription>Quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-4 py-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="h-4 w-4 text-blue-600" />
                      <h3 className="font-medium text-blue-900">How accurate is VitaScan AI?</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Our AI achieves 99.2% accuracy rate, validated across multiple healthcare institutions and
                      thousands of medical images. The system is continuously improved with new data.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4 py-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <h3 className="font-medium text-green-900">Is my patient data secure?</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Yes, we are fully HIPAA compliant with enterprise-grade security measures including end-to-end
                      encryption, secure cloud storage, and strict access controls to protect all patient information.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4 py-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <BookOpen className="h-4 w-4 text-purple-600" />
                      <h3 className="font-medium text-purple-900">What image formats are supported?</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      We support JPEG, PNG, and DICOM formats for chest X-ray analysis. Images should be high-quality
                      and properly oriented for best results.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4 py-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <h3 className="font-medium text-orange-900">How fast is the analysis process?</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Analysis typically takes 2-5 seconds per image. Our AI processes images in real-time, providing
                      instant results to accelerate your diagnostic workflow.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
