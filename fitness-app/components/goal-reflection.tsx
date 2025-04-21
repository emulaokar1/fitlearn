"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dumbbell, Brain, Calendar, Target, TrendingDown, Utensils } from "lucide-react"

export default function GoalReflection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showFinalSlide, setShowFinalSlide] = useState(false)
  const [answers, setAnswers] = useState({
    obstacle: "",
    obstacleOther: "",
    fitnessHabits: "",
    fitnessHabitsOther: "",
    daysPerWeek: 3,
    goals: [] as string[],
    plateaued: "",
    plateauedDetails: "",
    nutritionConfidence: 3,
  })

  const handleMultipleChoice = (value: string, field: string) => {
    setAnswers({ ...answers, [field]: value })
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setAnswers({ ...answers, [field]: e.target.value })
  }

  const handleCheckboxChange = (value: string) => {
    const currentGoals = [...answers.goals]

    if (currentGoals.includes(value)) {
      setAnswers({
        ...answers,
        goals: currentGoals.filter((goal) => goal !== value),
      })
    } else {
      setAnswers({
        ...answers,
        goals: [...currentGoals, value],
      })
    }
  }

  const handleDaysChange = (value: string) => {
    setAnswers({ ...answers, daysPerWeek: Number.parseInt(value) })
  }

  const handleConfidenceChange = (value: string) => {
    setAnswers({ ...answers, nutritionConfidence: Number.parseInt(value) })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowFinalSlide(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setShowFinalSlide(false)
    setAnswers({
      obstacle: "",
      obstacleOther: "",
      fitnessHabits: "",
      fitnessHabitsOther: "",
      daysPerWeek: 3,
      goals: [],
      plateaued: "",
      plateauedDetails: "",
      nutritionConfidence: 3,
    })
  }

  const questions = [
    {
      id: "obstacle",
      icon: <Dumbbell className="h-8 w-8 text-blue-600" />,
      title: "What's the biggest thing stopping you from working out consistently?",
      description: "Understanding your obstacles is the first step to overcoming them.",
      component: (
        <div className="space-y-4">
          <RadioGroup
            value={answers.obstacle}
            onValueChange={(value) => handleMultipleChoice(value, "obstacle")}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dont-know-where-to-start" id="dont-know-where-to-start" />
              <Label htmlFor="dont-know-where-to-start">I don't know where to start</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="inconsistent-schedule" id="inconsistent-schedule" />
              <Label htmlFor="inconsistent-schedule">I don't have a consistent schedule</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bored-unmotivated" id="bored-unmotivated" />
              <Label htmlFor="bored-unmotivated">I get bored or lose motivation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no-progress" id="no-progress" />
              <Label htmlFor="no-progress">I've started before but didn't see progress</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="obstacle-other" />
              <Label htmlFor="obstacle-other">Other</Label>
            </div>
          </RadioGroup>

          {answers.obstacle === "other" && (
            <div className="mt-3">
              <Input
                placeholder="Please specify"
                value={answers.obstacleOther}
                onChange={(e) => handleTextChange(e, "obstacleOther")}
              />
            </div>
          )}
        </div>
      ),
    },
    {
      id: "fitnessHabits",
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "How would you describe your current fitness habits?",
      description: "This helps us understand your starting point.",
      component: (
        <div className="space-y-4">
          <RadioGroup
            value={answers.fitnessHabits}
            onValueChange={(value) => handleMultipleChoice(value, "fitnessHabits")}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no-exercise" id="no-exercise" />
              <Label htmlFor="no-exercise">I don't exercise at all</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="some-cardio" id="some-cardio" />
              <Label htmlFor="some-cardio">I do some cardio (walking, running, sports)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lift-weights" id="lift-weights" />
              <Label htmlFor="lift-weights">I lift weights a couple times a week</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="active-unstructured" id="active-unstructured" />
              <Label htmlFor="active-unstructured">I'm active, but not on a structured plan</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="habits-other" />
              <Label htmlFor="habits-other">Other</Label>
            </div>
          </RadioGroup>

          {answers.fitnessHabits === "other" && (
            <div className="mt-3">
              <Input
                placeholder="Please specify"
                value={answers.fitnessHabitsOther}
                onChange={(e) => handleTextChange(e, "fitnessHabitsOther")}
              />
            </div>
          )}
        </div>
      ),
    },
    {
      id: "daysPerWeek",
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: "How many days per week can you realistically commit to training?",
      description: "Be honest with yourself - consistency is key!",
      component: (
        <div className="space-y-6">
          <div className="flex justify-between px-2">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((day) => (
              <span key={day} className="text-sm font-medium">
                {day}
              </span>
            ))}
          </div>
          <input
            type="range"
            min="0"
            max="7"
            value={answers.daysPerWeek}
            onChange={(e) => handleDaysChange(e.target.value)}
            className="w-full"
          />
          <div className="text-center text-lg font-medium">
            {answers.daysPerWeek} {answers.daysPerWeek === 1 ? "day" : "days"} per week
          </div>
        </div>
      ),
    },
    {
      id: "goals",
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "What are your current goals?",
      description: "Select all that apply to you.",
      component: (
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="build-muscle"
              checked={answers.goals.includes("build-muscle")}
              onCheckedChange={() => handleCheckboxChange("build-muscle")}
            />
            <Label htmlFor="build-muscle">Build muscle</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="lose-fat"
              checked={answers.goals.includes("lose-fat")}
              onCheckedChange={() => handleCheckboxChange("lose-fat")}
            />
            <Label htmlFor="lose-fat">Lose fat</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="improve-endurance"
              checked={answers.goals.includes("improve-endurance")}
              onCheckedChange={() => handleCheckboxChange("improve-endurance")}
            />
            <Label htmlFor="improve-endurance">Improve endurance</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="increase-strength"
              checked={answers.goals.includes("increase-strength")}
              onCheckedChange={() => handleCheckboxChange("increase-strength")}
            />
            <Label htmlFor="increase-strength">Increase strength</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="feel-healthier"
              checked={answers.goals.includes("feel-healthier")}
              onCheckedChange={() => handleCheckboxChange("feel-healthier")}
            />
            <Label htmlFor="feel-healthier">Feel healthier / more energized</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="build-habit"
              checked={answers.goals.includes("build-habit")}
              onCheckedChange={() => handleCheckboxChange("build-habit")}
            />
            <Label htmlFor="build-habit">Build a sustainable habit</Label>
          </div>
        </div>
      ),
    },
    {
      id: "plateaued",
      icon: <TrendingDown className="h-8 w-8 text-blue-600" />,
      title: "Have you ever felt stuck or plateaued when working out?",
      description: "Many people hit plateaus in their fitness journey.",
      component: (
        <div className="space-y-4">
          <RadioGroup
            value={answers.plateaued}
            onValueChange={(value) => handleMultipleChoice(value, "plateaued")}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="plateaued-yes" />
              <Label htmlFor="plateaued-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="plateaued-no" />
              <Label htmlFor="plateaued-no">No</Label>
            </div>
          </RadioGroup>

          {answers.plateaued === "yes" && (
            <div className="mt-3">
              <Label htmlFor="plateaued-details" className="mb-2 block">
                When did it happen?
              </Label>
              <Input
                id="plateaued-details"
                placeholder="e.g., After 3 months of training"
                value={answers.plateauedDetails}
                onChange={(e) => handleTextChange(e, "plateauedDetails")}
              />
            </div>
          )}
        </div>
      ),
    },
    {
      id: "nutritionConfidence",
      icon: <Utensils className="h-8 w-8 text-blue-600" />,
      title: "How confident are you about what and how much to eat to support your goals?",
      description: "Nutrition plays a crucial role in achieving fitness goals.",
      component: (
        <div className="space-y-6">
          <div className="flex justify-between px-2">
            <span className="text-sm font-medium">No clue</span>
            <span className="text-sm font-medium">Very confident</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            value={answers.nutritionConfidence}
            onChange={(e) => handleConfidenceChange(e.target.value)}
            className="w-full"
          />
          <div className="flex justify-between px-2">
            <span className="text-xs">1</span>
            <span className="text-xs">2</span>
            <span className="text-xs">3</span>
            <span className="text-xs">4</span>
            <span className="text-xs">5</span>
          </div>
          <div className="text-center text-lg font-medium">
            {answers.nutritionConfidence === 1 && "Not confident at all"}
            {answers.nutritionConfidence === 2 && "Slightly confident"}
            {answers.nutritionConfidence === 3 && "Moderately confident"}
            {answers.nutritionConfidence === 4 && "Quite confident"}
            {answers.nutritionConfidence === 5 && "Very confident"}
          </div>
        </div>
      ),
    },
  ]

  const currentQuestionData = questions[currentQuestion]

  return (
    <section className="bg-gray-50 py-16" id="goal-reflection">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">Reflect on Your Fitness Journey</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Take a moment to think about these questions. Your answers will help you clarify your goals and identify the
          right approach for you.
        </p>

        <div className="mx-auto max-w-3xl rounded-lg border bg-white p-6 shadow-sm">
          {!showFinalSlide ? (
            <>
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  {currentQuestionData.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{currentQuestionData.title}</h3>
                  <p className="text-gray-600">{currentQuestionData.description}</p>
                </div>
              </div>

              <div className="mb-8 py-4">{currentQuestionData.component}</div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Previous
                </Button>
                <div className="text-sm text-gray-500">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
                <Button
                  onClick={handleNext}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {currentQuestion === questions.length - 1 ? "Complete" : "Next"}
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">All Done!</h3>
              <p className="mb-6 text-lg text-gray-600">
                Keep your answers in mind as you continue your fitness journey. Your responses will help guide you toward your goals.
              </p>
              <Button
                onClick={handleRestart}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Start Over
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
