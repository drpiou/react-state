export declare type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U> ? Array<DeepPartial<U>> : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]>;
};
export declare type DeepRecord<K extends keyof any, T> = {
    [P in K]: DeepRecord<K, T> | T;
};
export declare type PathImpl<T, Key extends keyof T> = Key extends string ? T[Key] extends Record<string, any> ? `${Key}.${PathImpl<T[Key], Exclude<keyof T[Key], keyof any[]>> & string}` | `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}` : never : never;
export declare type PathImpl2<T> = PathImpl<T, keyof T> | keyof T;
export declare type Path<T> = PathImpl2<T> extends string | keyof T ? PathImpl2<T> : keyof T;
