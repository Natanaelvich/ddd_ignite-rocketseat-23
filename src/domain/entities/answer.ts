interface AnswerProps {
  authorId: string;
  questionId: string;
  content: string;
}

export class Answer {
  private constructor(private props: AnswerProps, private id?: string) {}

  get authorId() {
    return this.props.authorId;
  }

  get questionId() {
    return this.props.questionId;
  }

  get content() {
    return this.props.content;
  }

  static create(props: AnswerProps, id?: string) {
    const answer = new Answer(
      {
        ...props,
      },
      id
    );

    return answer;
  }
}
