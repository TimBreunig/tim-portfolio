import ProjectPage from "@/components/ProjectPage";


const Expiravoid = () => {
    return (
        <ProjectPage
            title="Expiravoid"
            year="2026"
            roles={["Web Design", "Fullstack Development"]}
            description="Tired of losing track of which ingredients you have at home? Expiravoid lets you manage your inventory and create shopping lists directly from the recipes you want to cook to significantly simplify your household."
            images={[
                "/images/expiravoid_teaser.png",
            ]}
        />
    )
}

export default Expiravoid;