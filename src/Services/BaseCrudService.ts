export class BaseCrudService<
  GetAllOutput = any,
  GetOutput = any,
  CreateOutput = any,
  UpdateOutput = any,
  DeleteOutput = any
> {

  getAll(): GetAllOutput {
    return "get all" as GetAllOutput
  }

  get(id: string): GetOutput {
    return `get by id - ${id}` as GetOutput
  }

  create(): CreateOutput {
    return "create" as CreateOutput
  }

  update(): UpdateOutput {
    return "update" as UpdateOutput
  }

  delete(): DeleteOutput {
    return "delete" as DeleteOutput
  }
}