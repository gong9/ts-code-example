interface TargetType{
    use: string;
    age: number;
    address?: string;
  }

type HandleType<T,K extends string> = {
  [P in keyof Omit<T, K>]: Omit<T, K>[P];
} & { address: string };

type FinalType = HandleType<TargetType, 'address'>

declare let demo:FinalType

