import { ExtendedValidationPipe } from './pipe'

const use = (a: any) => Object.assign(a, {})
const pipe = () => use(ExtendedValidationPipe.shared)

export { pipe }
