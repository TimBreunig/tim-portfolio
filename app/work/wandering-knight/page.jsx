import ProjectPage from "@/components/ProjectPage";


const WanderingKnight = () => {
    return (
        <ProjectPage
            title="MovieNight"
            year="2024"
            roles={["Web Design", "Frontend Development"]}
            description="Planning movie nights with friends can be quite... chaotic. As part of the study course Mobile Web Applications, I was member of a small team designing and developing a mobile-first web app that lets you manage the planning process digitally. You can create groups, propose movies from a huge database and vote for your favourite."
            images={[
                "/images/movie_night_teaser.png",
                "/images/movie_night_teaser2.png",
                "/images/movie_night_teaser3.png",
                "/images/movie_night_teaser4.png",
            ]}
        />
    )
}

export default WanderingKnight;