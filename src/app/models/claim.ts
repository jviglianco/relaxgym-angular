export class Claim {
    unique_name!: string;
    given_name!: string
    role!: string;
    primarysid!: string;
    nbf!: number;
    exp!: number;
    iat!: number;
}
