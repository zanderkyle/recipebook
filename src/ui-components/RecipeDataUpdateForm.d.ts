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
export declare type RecipeDataUpdateFormInputValues = {
    name?: string;
};
export declare type RecipeDataUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecipeDataUpdateFormOverridesProps = {
    RecipeDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecipeDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: RecipeDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    recipeData?: any;
    onSubmit?: (fields: RecipeDataUpdateFormInputValues) => RecipeDataUpdateFormInputValues;
    onSuccess?: (fields: RecipeDataUpdateFormInputValues) => void;
    onError?: (fields: RecipeDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecipeDataUpdateFormInputValues) => RecipeDataUpdateFormInputValues;
    onValidate?: RecipeDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RecipeDataUpdateForm(props: RecipeDataUpdateFormProps): React.ReactElement;
