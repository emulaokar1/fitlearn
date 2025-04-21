import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import Quiz from "@/components/quiz"
import { AlertTriangle } from "lucide-react"

export default function NutritionPage() {
  const quizQuestions = [
    {
      id: 1,
      question: "How much protein should active individuals consume daily?",
      options: [
        "0.3-0.5g per pound of bodyweight",
        "0.7-1.0g per pound of bodyweight",
        "1.5-2.0g per pound of bodyweight",
        "As much as possible",
      ],
      correctAnswer: 1,
      explanation:
        "Most research suggests that 0.7-1.0g of protein per pound of bodyweight is optimal for muscle growth and recovery in active individuals.",
    },
    {
      id: 2,
      question: "Which is NOT a good source of protein?",
      options: ["Chicken breast", "Greek yogurt", "White bread", "Tofu"],
      correctAnswer: 2,
      explanation:
        "White bread contains very little protein compared to chicken breast, Greek yogurt, and tofu, which are all excellent protein sources.",
    },
    {
      id: 3,
      question: "How much water should you aim to drink daily?",
      options: ["1-2 liters", "2-3 liters", "4-5 liters", "Only when thirsty"],
      correctAnswer: 1,
      explanation:
        "Most health authorities recommend drinking 2-3 liters (8-10 glasses) of water daily, with more needed during intense exercise or hot weather.",
    },
  ]

  return (
    <>
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-center text-4xl font-bold">Nutrition Basics</h1>
          <p className="mx-auto mb-0 max-w-2xl text-center text-lg">
            Learn the fundamentals of nutrition to fuel your workouts and support your fitness goals.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Intuitive Eating Tips</h2>

          <div className="mx-auto mb-12 max-w-3xl p-8">
            <h3 className="mb-4 text-xl font-semibold">Understanding Your Nutrition Needs</h3>
            <p className="mb-4 text-gray-600">
              Your nutrition approach should align with your fitness goals. To lose weight, you need to consume fewer calories than you burn each day, while to gain weight (particularly muscle), you need to eat more. However, you don't necessarily need to count calories to stay on track!
            </p>
            <p className="mb-4 text-gray-600">
              The secret to sustainable nutrition lies in choosing foods that keep you feeling great: protein and fiber are your best friends for staying satisfied, while healthy fats work wonders for regulating hunger and keeping your energy stable. These powerhouse nutrients don't just help with hunger - they're essential for your overall health and workout performance!
            </p>
            <p className="text-gray-600">
              Here's your nutrition superpower: listen to your body! Take your time eating, stop when you feel satisfied (not stuffed), and focus on whole, nutritious foods. Remember, you don't need to be perfect - small, consistent changes are what lead to amazing, lasting results. You've got this!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Protein</h3>
              <p className="mb-4 text-gray-600">
                Protein is essential for muscle repair and growth. Aim for 0.7-1.0g per pound of bodyweight daily.
              </p>
              <div className="rounded-md bg-gray-100 p-4">
                <h4 className="mb-2 font-medium">Good Sources:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Chicken breast</li>
                  <li>• Greek yogurt</li>
                  <li>• Eggs</li>
                  <li>• Tofu</li>
                  <li>• Lean beef</li>
                  <li>• Whey protein</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Hydration</h3>
              <p className="mb-4 text-gray-600">
                Proper hydration is crucial for performance and recovery. Even mild dehydration can impact your workout.
              </p>
              <div className="rounded-md bg-gray-100 p-4">
                <h4 className="mb-2 font-medium">Tips:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Drink 2-3 liters of water daily</li>
                  <li>• Increase intake during workouts</li>
                  <li>• Drink water before, during, and after exercise</li>
                  <li>• Consider electrolytes for intense workouts</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Fiber</h3>
              <p className="mb-4 text-gray-600">
                Fiber is crucial for digestive health, blood sugar regulation, and maintaining a healthy weight. Aim for 25-35g of fiber daily.
              </p>
              <div className="rounded-md bg-gray-100 p-4">
                <h4 className="mb-2 font-medium">Good Sources:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Legumes (beans, lentils)</li>
                  <li>• Whole grains (oats, quinoa)</li>
                  <li>• Fruits (berries, apples)</li>
                  <li>• Vegetables (broccoli, spinach)</li>
                  <li>• Nuts and seeds</li>
                  <li>• Chia seeds</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Carbohydrates</h3>
              <p className="mb-4 text-gray-600">
                Carbs are your body's preferred energy source, especially for high-intensity exercise.
              </p>
              <div className="rounded-md bg-gray-100 p-4">
                <h4 className="mb-2 font-medium">Good Sources:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Whole grains (oats, brown rice)</li>
                  <li>• Fruits</li>
                  <li>• Potatoes</li>
                  <li>• Beans and legumes</li>
                  <li>• Whole grain bread</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Fats</h3>
              <p className="mb-4 text-gray-600">
                Healthy fats are essential for hormone production, including testosterone which is important for muscle
                growth.
              </p>
              <div className="rounded-md bg-gray-100 p-4">
                <h4 className="mb-2 font-medium">Good Sources:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Avocados</li>
                  <li>• Nuts and seeds</li>
                  <li>• Olive oil</li>
                  <li>• Fatty fish (salmon)</li>
                  <li>• Eggs</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Meal Timing</h3>
              <p className="mb-4 text-gray-600">
                While total daily intake matters most, meal timing can help optimize performance and recovery.
              </p>
              <div className="rounded-md bg-gray-100 p-4">
                <h4 className="mb-2 font-medium">Tips:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Eat protein with each meal</li>
                  <li>• Consider a pre-workout meal 1-2 hours before</li>
                  <li>• Post-workout nutrition within 1-2 hours</li>
                  <li>• Space protein intake throughout the day</li>
                  <li>• Adjust carb intake based on activity level</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Common Mistakes</h2>

          <div className="mx-auto max-w-3xl space-y-6">
            <Alert variant="destructive" className="border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Severely Restricting Calories</AlertTitle>
              <AlertDescription>
                Drastically cutting calories can slow metabolism, reduce muscle mass, and lead to nutrient deficiencies.
                Instead, aim for a moderate calorie deficit of 300-500 calories per day for sustainable fat loss.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive" className="border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Avoiding Carbohydrates</AlertTitle>
              <AlertDescription>
                Carbs are essential for high-intensity exercise performance. Low-carb diets may impair your ability to
                train hard and recover properly. Focus on quality carb sources around your workouts.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive" className="border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Relying Too Much on Supplements</AlertTitle>
              <AlertDescription>
                Supplements should supplement a good diet, not replace it. Focus on getting nutrients from whole foods
                first, then add supplements to fill specific gaps if needed.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive" className="border-red-200 bg-red-50">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Not Eating Enough Protein</AlertTitle>
              <AlertDescription>
                Inadequate protein intake can limit muscle growth and recovery. Most active individuals need 0.7-1.0g of
                protein per pound of bodyweight daily to support their training.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Test Your Knowledge</h2>
          <div className="mx-auto max-w-3xl">
            <Quiz title="Nutrition Quiz" questions={quizQuestions} />
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to put it all together?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Now that you've learned about workout planning, progressive overload, and nutrition, it's time to create
            your own fitness plan!
          </p>
          <Link href="/plan-routine">
            <Button size="lg" variant="secondary">
              Start Building Your Plan
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
