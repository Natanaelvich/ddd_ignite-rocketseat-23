interface InstructorProps {
  name: string;
}

export class Instructor {
  private constructor(private props: InstructorProps, private id?: string) {}

  static create(props: InstructorProps, id?: string) {
    const instructor = new Instructor(props, id);

    return instructor;
  }
}
