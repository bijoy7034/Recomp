import React from "react";
import RecompBadge from "../components/Badge/badge";


export default {
    title : "Components/RecompBadge",
    component: RecompBadge,
    tags: ["autodocs"],
    argTypes: {
        text: {
            description: "This is the text inside the badge",
        },
        variant :{
            description: "Color inside the badge"
        }
      },
}
export const MultipleBadges = () => (
    <div style={{ display: "flex", gap: "8px" }}>
      <RecompBadge text="Success" variant="success" />
      <RecompBadge text="Warning" variant="warning" />
      <RecompBadge text="Danger" variant="danger" />
    </div>
  );
  
export const Normal = {
    args: {
        text : "danger",
        variant: "danger",
    }
}