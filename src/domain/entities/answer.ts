import { Entity } from "../../core/entities/entity";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";

interface AnswerProps {
  authorId: UniqueEntityID;
  questionId: UniqueEntityID;
  content: string;
}

export class Answer extends Entity<AnswerProps> {


  get authorId() {
    return this.props.authorId;
  }

  get questionId() {
    return this.props.questionId;
  }

  get content() {
    return this.props.content;
  }

  static create(props: AnswerProps, id?: UniqueEntityID) {
    const answer = new Answer(
      {
        ...props,
      },
      id
    );

    return answer;
  }
}
