export class ApiResponse<T> {
  readonly data: any;
  readonly message: string;

  constructor(data: any, message: string) {
    this.data = typeof data === "string" ? JSON.parse(data) : data;
    this.message = message;
  }
}