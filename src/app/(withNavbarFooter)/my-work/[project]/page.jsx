import { notFound } from 'next/navigation'
import { ProjectsInfo } from '@/constants/Projects';
import IndividualWorkPage from '@/components/Projects/IndividualWorkPage';

export async function generateStaticParams() {
  return ProjectsInfo.map((project) => ({
    project: project.name
  }))
}

export async function generateMetadata({ params }) {
  const { project } = await params;
  const currentProject = ProjectsInfo.find(p => p.name === project)

  if (!currentProject) {
    return { title: 'Not Found' }
  }

  return currentProject.meta;
}

export default async function MyWorksPage({ params }) {
  const { project } = await params;
  const currentProject = ProjectsInfo.find(p => p.name === project)

  if (!currentProject) notFound()

  return (
    <>
      <IndividualWorkPage
        project={{ ...currentProject, meta: undefined }}
      />
    </>
  )
}
