import Link from "next/link"
import { Button } from "@/components/ui/button"
import CollapsibleTip from "@/components/collapsible-tip"
import Quiz from "@/components/quiz"
import Image from "next/image"

export default function ProgressiveOverloadPage() {
  const quizQuestions = [
    {
      id: 1,
      question: "What is progressive overload?",
      options: [
        "Lifting the heaviest weight possible every workout",
        "Gradually increasing the stress placed on the body during exercise",
        "Working out until complete exhaustion",
        "Changing your workout routine every week",
      ],
      correctAnswer: 1,
      explanation:
        "Progressive overload is the gradual increase of stress placed on the body during exercise training to stimulate adaptation and progress.",
    },
    {
      id: 2,
      question: "Which is NOT a way to implement progressive overload?",
      options: [
        "Increasing weight",
        "Adding more reps",
        "Decreasing rest time between sets",
        "Using the same weight and reps for months",
      ],
      correctAnswer: 3,
      explanation:
        "Using the same weight and reps for months doesn't provide progressive overload. You need to increase some aspect of your training over time.",
    },
    {
      id: 3,
      question: "How often should you aim to increase weight or reps?",
      options: ["Every workout", "Every 1-2 weeks", "Every 3-4 weeks", "Only when it feels easy"],
      correctAnswer: 1,
      explanation:
        "For beginners and intermediates, aiming to increase weight or reps every 1-2 weeks is a reasonable goal that allows for adaptation.",
    },
  ]

  return (
    <>
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-center text-4xl font-bold">Progressive Overload</h1>
          <p className="mx-auto mb-0 max-w-2xl text-center text-lg">
            Learn the key principle behind continuous improvement in your fitness journey.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">What is Progressive Overload?</h2>
              <p className="mb-4 text-lg text-gray-600">
                Progressive overload is the gradual increase of stress placed on the body during exercise training. It's
                the fundamental principle behind getting stronger, building muscle, and improving fitness.
              </p>
              <p className="mb-6 text-lg text-gray-600">
                Without progressive overload, your body has no reason to adapt and improve. By consistently challenging
                your muscles with increased demands, you force them to respond by getting stronger and larger.
              </p>

              <h3 className="mb-4 text-xl font-semibold">Ways to Implement Progressive Overload:</h3>
              <ul className="mb-6 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-blue-600"></div>
                  <span>
                    <strong>Increase weight:</strong> Add more weight to the bar or machine
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-blue-600"></div>
                  <span>
                    <strong>Increase reps:</strong> Perform more repetitions with the same weight
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-blue-600"></div>
                  <span>
                    <strong>Increase sets:</strong> Add more sets of an exercise
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-blue-600"></div>
                  <span>
                    <strong>Increase frequency:</strong> Train a muscle group more often
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-blue-600"></div>
                  <span>
                    <strong>Improve form:</strong> Perform exercises with better technique
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative h-[400px] w-full">
              <Image
                src="/po.jpg"
                alt="Progressive overload diagram"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold">Effective Progressive Overload Strategies</h2>
            
            <div className="p-6">
              <p className="mb-4 text-gray-600">
                While there are many ways to implement progressive overload, one of the most effective strategies, especially for beginners and intermediates, is to prioritize increasing intensity rather than simply adding more sets or workout time. This means aiming to lift heavier weights or perform more reps each week, rather than stacking on volume.
              </p>
              
              <p className="mb-4 text-gray-600">
                Training with low volume and high intensity (e.g., 2 sets of 4–8 reps per exercise) allows your body to recover more effectively while still signaling strong adaptation. Once you're confident in your form, focus on pushing those sets close to failure with excellent technique. This minimalist approach can build strength efficiently without burning you out.
              </p>
              
              <p className="text-gray-600">
                Plateauing is a normal part of training and often a sign of accumulated fatigue. If you find your progress stalling, consider taking a deload week (a lighter training week) or switching up your exercises to give your body a new stimulus and allow recovery to catch up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Did You Know?</h2>

          <div className="mx-auto max-w-3xl space-y-6">
            <CollapsibleTip title="The History of Progressive Overload">
              <p>
                The concept of progressive overload dates back to ancient Greece. The wrestler Milo of Croton reportedly
                carried a growing calf on his shoulders every day until it became a full-grown bull, demonstrating the
                principle of gradually increasing resistance.
              </p>
            </CollapsibleTip>

            <CollapsibleTip title="Beginners Progress Faster">
              <p>
                Beginners can make progress much faster than experienced lifters. This is known as "newbie gains" and
                occurs because untrained muscles are highly responsive to new stimuli. Beginners can often increase
                weight or reps every workout for several months!
              </p>
            </CollapsibleTip>

            <CollapsibleTip title="Progressive Overload Isn't Just for Strength">
              <p>
                While often associated with weightlifting, progressive overload applies to all forms of exercise.
                Runners can gradually increase distance or pace, swimmers can add laps or reduce rest times, and yoga
                practitioners can progress to more challenging poses.
              </p>
            </CollapsibleTip>

            <CollapsibleTip title="Recovery is Essential">
              <p>
                Progressive overload only works if you allow your body to recover between workouts. Without adequate
                recovery (including sleep, nutrition, and rest days), you won't adapt properly to the increased demands
                and may even regress in performance.
              </p>
            </CollapsibleTip>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Test Your Knowledge</h2>
          <div className="mx-auto max-w-3xl">
            <Quiz title="Progressive Overload Quiz" questions={quizQuestions} />
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to learn about nutrition?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Discover how proper nutrition can enhance your workout results and overall health.
          </p>
          <Link href="/nutrition">
            <Button size="lg" variant="secondary">
              Continue to Nutrition Basics
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
