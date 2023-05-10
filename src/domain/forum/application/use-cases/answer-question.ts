import { UniqueEntityID } from "@/core/entities/unique-entity-id"
import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answers-repository"


interface AnswerQuestionUseCaseRequest {
  instructorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
}

export class AnswerQuestionUseCase {
  constructor(
    private answersRepository: AnswersRepository,
  ) {}

  async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = Answer.create({
      content,
      authorId: instructorId,
      questionId: questionId,
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
