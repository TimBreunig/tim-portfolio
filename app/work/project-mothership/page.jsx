import ProjectPage from "@/components/ProjectPage";


const ProjectMothership = () => {
    return (
        <ProjectPage
            title="Project Mothership"
            year="2024"
            roles={["Game Development"]}
            description="In this cooperative action-adventure game, players embark on an intergalactic journey where teamwork, exploration, and puzzle-solving are key to success. The game revolves around your mothership. Work together to navigate mysterious planets and solve intricate puzzles, all while enhancing the mothership to tackle increasingly challenging missions. The thrill of discovery and the wonder of the unknown await you!"
            images={[
                "/images/project_mothership_teaser.png",
                "/images/project_mothership_teaser.png",
                "/images/project_mothership_teaser3.png",
                "/images/project_mothership_teaser.png",
            ]}
        />
    )
}

export default ProjectMothership;