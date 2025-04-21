import Link from "next/link"
import { Button } from "@/components/ui/button"
import StepCard from "@/components/step-card"
import Quiz from "@/components/quiz"
import { Download, Calendar, Dumbbell, Heart } from "lucide-react"

export default function PlanRoutinePage() {
  const quizQuestions = [
    {
      id: 1,
      question: "How many days per week should a beginner work out?",
      options: ["1-2 days", "3-4 days", "5-6 days", "Every day"],
      correctAnswer: 1,
      explanation:
        "For beginners, 3-4 days per week is ideal to allow for proper recovery while still making progress.",
    },
    {
      id: 2,
      question: "Which is NOT a key component of a well-rounded fitness routine?",
      options: [
        "Strength training",
        "Cardiovascular exercise",
        "Flexibility work",
        "Working the same muscle group daily",
      ],
      correctAnswer: 3,
      explanation:
        "Working the same muscle group daily doesn't allow for proper recovery and can lead to overtraining.",
    },
    {
      id: 3,
      question: "What's a good approach to setting fitness goals?",
      options: [
        "Set vague goals like 'get fit'",
        "Set specific, measurable goals",
        "Only focus on weight loss",
        "Set unrealistic goals to push yourself",
      ],
      correctAnswer: 1,
      explanation:
        "Setting specific, measurable goals (like 'squat 150 pounds' or 'run a 5K') helps track progress and stay motivated.",
    },
  ]

  return (
    <>
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-center text-4xl font-bold">Plan Your Routine</h1>
          <p className="mx-auto mb-0 max-w-2xl text-center text-lg">
            Learn how to create an effective workout routine that fits your schedule and helps you reach your goals.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Step-by-Step Guide</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <StepCard
              number={1}
              title="Set Clear Goals"
              description="Define what you want to achieve with your fitness routine. Be specific and realistic."
            >
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-md bg-blue-50 p-3 text-center">
                  <Dumbbell className="mx-auto mb-2 h-6 w-6 text-blue-600" />
                  <span className="text-sm font-medium">Build Muscle</span>
                </div>
                <div className="rounded-md bg-blue-50 p-3 text-center">
                  <Heart className="mx-auto mb-2 h-6 w-6 text-blue-600" />
                  <span className="text-sm font-medium">Improve Health</span>
                </div>
              </div>
            </StepCard>

            <StepCard
              number={2}
              title="Choose Workout Days"
              description="Decide how many days per week you can commit to working out and which days work best for your schedule."
            >
              <div className="mt-4">
                <Calendar className="mx-auto h-10 w-10 text-blue-600" />
              </div>
            </StepCard>

            <StepCard
              number={3}
              title="Mix Cardio and Strength"
              description="Create a balanced routine that includes both cardiovascular exercise and strength training for optimal results."
            >
              <div className="mt-4 rounded-md bg-blue-50 p-3">
                <p className="text-sm text-blue-800">
                  <strong>Example Split:</strong> Mon/Thu: Upper Body, Tue/Fri: Lower Body, Wed: Cardio
                </p>
              </div>
            </StepCard>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Building a Workout Plan</h2>

          <div className="mx-auto max-w-3xl">
            <div className="p-6">
              <p className="mb-4 text-gray-600">
                Designing an effective workout schedule isn't just about fitting in gym sessions — it's about balancing training intensity with adequate recovery. Recovery is where your body actually builds strength, so scheduling rest days or lighter sessions is just as important as the workouts themselves. Most people benefit from training each muscle group 2 times per week, which can be achieved with 3–5 workouts per week depending on your split. For example, a push/pull/legs routine or full-body workouts spaced throughout the week both allow enough rest while promoting progress.
              </p>
              
              <p className="text-gray-600">
                Your schedule should also reflect your lifestyle, sports commitments, and personal energy levels. If you play intramural sports or go on regular runs, consider those as training and avoid overloading yourself by lifting heavy on the same days. For example, you might lift on Monday, Wednesday, and Friday, then play sports or do cardio on Tuesday and Saturday. Don't feel pressured to train like someone with a 9–5 job if your routine changes week to week, even 2–3 focused, high-effort sessions can drive great results. The key is consistency and giving your body time to adapt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Test Your Knowledge</h2>
          <div className="mx-auto max-w-3xl">
            <Quiz title="Workout Planning Quiz" questions={quizQuestions} />
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to take the next step?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Learn about progressive overload to continue making progress in your fitness journey.
          </p>
          <Link href="/progressive-overload">
            <Button size="lg" variant="secondary">
              Continue to Progressive Overload
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
