import CouserCard from "../components/CourseCard";

function HomePage() {

  return (
    <div className="homepage">
      <CouserCard
        imageUrl= "/logo.png"  
        name = "React Js"
        category= "front-end"
        description="Curso sobre react Js"
        duration = {6}
      />

    </div>
  )
}

export default HomePage;