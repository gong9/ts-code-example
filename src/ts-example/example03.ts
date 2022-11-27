interface TargetType{
    use: string;
    age: number;
    address?: string;
  }

type HandleType<T,K extends string,P extends any> = Omit<T, K> & { [ prop in K]: P};

type FinalType = HandleType<TargetType, 'address',string>

declare let demo:FinalType



