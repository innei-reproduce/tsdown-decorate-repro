class ValidationPipe {
  constructor(options: any) {}
}

@Injectable()
export class ExtendedValidationPipe extends ValidationPipe {
  public static readonly options = {}

  public static readonly shared = new ExtendedValidationPipe(
    ExtendedValidationPipe.options,
  )
}
function Injectable(options) {
  return (target) => {}
}
