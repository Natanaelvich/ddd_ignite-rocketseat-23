

interface QuestionProps {
  authorId: string
  title: string
  content: string
}

export class Question {

    private constructor(
        private props: QuestionProps,
        private id?: string
    ) {}



  static create(
    props: QuestionProps,
    id?: string
  ) {
    const question = new Question({
      ...props,
    }, id)

    return question
  }
}
