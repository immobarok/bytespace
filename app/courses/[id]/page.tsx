export default function CourseDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 pt-[120px]">
      <div className="text-center">
        <h1 className="text-heading-m text-neutral-950 mb-4">Course Details</h1>
        <p className="text-body-m text-neutral-600">Viewing details for course ID: {params.id}</p>
      </div>
    </div>
  );
}
