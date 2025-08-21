import './ProjectCards.css'
import CardContent from './components/CardContent'
import { IProjectCards } from '../../types/types'




export default function ProjectCards(props: IProjectCards) {
  return (
    <>
      <CardContent
        imgSrc={props.imgSrc}
        cardTitle={props.cardTitle}
        cardText={props.cardText}
        maxHeight={props.maxHeight}
        minHeight={props.minHeight}
        projectName={props.projectName}
        link={props.link}
      />
    </>
  )
}
