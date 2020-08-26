import { ProjectsSlideshow } from "components/generalComponents/projectsSlideshow/projectsSlideshow"
import React from "react"
import projectImage1 from "./assets/project1/1.jpg"
import projectImage2 from "./assets/project1/2.jpg"
import projectImage3 from "./assets/project1/3.jpg"
import projectImage4 from "./assets/project1/4.jpg"

const project1 = {
  timelineHeader: "SL vs BAN",
  header: "bangladeh's tour of sri lanka",
  date: "2019",
  description:
    "A project collaborated with ITW for an entire series all around the Carribean Islands.",
  detailsHeader: "total production & implementation",
  details: [
    {
      title: "Dates",
      body: "26th Jul - 31st Jul 2019",
    },
    {
      title: "3D Pitch Mats",
      body: "4 NOS",
    },
    {
      title: "3D Grass Signs",
      body: "4 NOS",
    },
    {
      title: "Venues",
      body: "1 Locations",
    },
  ],
  images: [projectImage1, projectImage2, projectImage3, projectImage4],
}

const project2 = {
  timelineHeader: "WI vs IND",
  header: "india's tour of west indies",
  date: "2019",
  description:
    "A project collaborated with ITW for an entire series all around the Carribean Islands.",
  detailsHeader: "total production & implementation",
  details: [
    {
      title: "Dates",
      body: "3rd Aug - 3rd Sep 2019",
    },
    {
      title: "3D Pitch Mats",
      body: "4 NOS",
    },
    {
      title: "3D Grass Signs",
      body: "8 NOS",
    },
    {
      title: "Venues",
      body: "5 Locations",
    },
  ],
  images: [projectImage1, projectImage2, projectImage3, projectImage4],
}

const project3 = {
  timelineHeader: "ICC MT20 Q",
  header: "ICC Men's T20 Qualifiers",
  date: "2019",
  description: "",
  detailsHeader: "total production & implementation",
  details: [
    {
      title: "Dates",
      body: "11th Oct - 2nd Nov 2019",
    },
    {
      title: "3D Pitch Mats",
      body: "4 NOS",
    },
    {
      title: "3D Grass Signs",
      body: "6 NOS",
    },
    {
      title: "Venues",
      body: "2 Locations",
    },
  ],
  images: [projectImage1, projectImage2, projectImage3, projectImage4],
}

const project4 = {
  timelineHeader: "SL vs NZ",
  header: "new zealand's tour of sri lanka",
  date: "2019",
  description: "",
  detailsHeader: "total production & implementation",
  details: [
    {
      title: "Dates",
      body: "14th Aug - 6th Sep 2019",
    },
    {
      title: "3D Pitch Mats",
      body: "4 NOS",
    },
    {
      title: "3D Grass Signs",
      body: "1 NOS",
    },
    {
      title: "Venues",
      body: "3 Locations",
    },
  ],
  images: [projectImage1, projectImage2, projectImage3, projectImage4],
}

const project5 = {
  timelineHeader: "SL vs WI",
  header: "west indie's tour of sri lanka",
  date: "2020",
  description: "",
  detailsHeader: "total production & implementation",
  details: [
    {
      title: "Dates",
      body: "22nd Feb - 6th MAR 2020",
    },
    {
      title: "3D Pitch Mats",
      body: "6 NOS",
    },
    {
      title: "3D Grass Signs",
      body: "2 NOS",
    },
    {
      title: "Venues",
      body: "4 Locations",
    },
  ],
  images: [projectImage1, projectImage2, projectImage3, projectImage4],
}

const pastProjects = [project1, project2, project3, project4, project5]

export const PastProjects = () => <ProjectsSlideshow data={pastProjects} />
