/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RecipeDataCreateFormInputValues = {
    name?: string;
};
export declare type RecipeDataCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecipeDataCreateFormOverridesProps = {
    RecipeDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecipeDataCreateFormProps = React.PropsWithChildren<{
    overrides?: RecipeDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RecipeDataCreateFormInputValues) => RecipeDataCreateFormInputValues;
    onSuccess?: (fields: RecipeDataCreateFormInputValues) => void;
    onError?: (fields: RecipeDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecipeDataCreateFormInputValues) => RecipeDataCreateFormInputValues;
    onValidate?: RecipeDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function RecipeDataCreateForm(props: RecipeDataCreateFormProps): React.ReactElement;
