export default function MealDetails({ params }) {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        {`Meal Details Page for ${params.mealId}`}
      </h1>
    </main>
  );
}
