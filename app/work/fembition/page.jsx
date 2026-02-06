"use client";

import ProjectPage from "@/components/ProjectPage";


const Fembition = () => {
    return (
        <ProjectPage
            title="Fembition"
            year="2025"
            roles={["Web Design"]}
            description="Fembition resulted from a challenge to design a landing page for a fictional organization within one business day – completely from scratch. It is a statement-driven concept that draws attention to the severe underrepresentation of female players in esports despite the industry’s rapid global growth. The issue is addressed through bold visuals, clear messaging and purposeful design."
            images={[
                "/images/fembition_teaser.png",
                "/images/fembition_teaser2.png",
                "/images/fembition_teaser3.png",
                "/images/fembition_teaser4.png",
            ]}
        />
    )
}
  
export default Fembition;