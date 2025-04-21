"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuizProps {
  questions: Question[]
  title: string
}

export default function Quiz({ questions, title }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [showFinalSlide, setShowFinalSlide] = useState(false)

  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback) return
    setSelectedOption(optionIndex)
  }

  const handleCheckAnswer = () => {
    if (selectedOption === null) return
    setShowFeedback(true)
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1)
    }
  }

  const handleNextQuestion = () => {
    setSelectedOption(null)
    setShowFeedback(false)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowFinalSlide(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setShowFeedback(false)
    setCorrectAnswers(0)
    setCompleted(false)
    setShowFinalSlide(false)
  }

  const currentQuestionData = questions[currentQuestion]
  const isCorrect = selectedOption === currentQuestionData.correctAnswer

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-xl font-semibold">{title}</h3>

      {!showFinalSlide ? (
        <>
          <div className="mb-4 flex justify-between">
            <span className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-gray-600">{correctAnswers} correct</span>
          </div>

          <div className="mb-4 h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-blue-600"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          <div className="mb-6">
            <h4 className="mb-4 text-lg font-medium">{currentQuestionData.question}</h4>
            <div className="space-y-3">
              {currentQuestionData.options.map((option, index) => (
                <div
                  key={index}
                  className={`cursor-pointer rounded-md border p-3 transition-colors ${
                    selectedOption === index
                      ? showFeedback
                        ? isCorrect
                          ? "border-green-500 bg-green-50"
                          : "border-red-500 bg-red-50"
                        : "border-blue-500 bg-blue-50"
                      : "hover:border-blue-200 hover:bg-blue-50"
                  }`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showFeedback &&
                      selectedOption === index &&
                      (isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {showFeedback && (
            <div
              className={`mb-6 rounded-md p-4 ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              <p className="font-medium">{isCorrect ? "Correct!" : "Incorrect!"}</p>
              <p>{currentQuestionData.explanation}</p>
            </div>
          )}

          <div className="flex justify-end space-x-3">
            {!showFeedback ? (
              <Button
                onClick={handleCheckAnswer}
                disabled={selectedOption === null}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Check Answer
              </Button>
            ) : (
              <Button onClick={handleNextQuestion} className="bg-blue-600 hover:bg-blue-700">
                {currentQuestion < questions.length - 1 ? "Next Question" : "Complete Quiz"}
              </Button>
            )}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h4 className="mb-4 text-2xl font-bold">All Done!</h4>
          <p className="mb-6 text-lg">
            You got {correctAnswers} out of {questions.length} questions correct.
          </p>
          <Button onClick={handleRestartQuiz} className="bg-blue-600 hover:bg-blue-700">
            Restart Quiz
          </Button>
        </div>
      )}
    </div>
  )
}
