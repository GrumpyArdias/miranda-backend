import { UserType } from "../@types/userTypes";

export const ValidateUserType = (data: any): data is UserType => {
  if (
    typeof data.fullName !== "string" ||
    typeof data.email !== "string" ||
    typeof data.joinDate !== "string" ||
    typeof data.description !== "string" ||
    typeof data.status !== "boolean" ||
    typeof data.number !== "string"
  ) {
    return false;
  }
  return true;
};

export const validateUserParams = (params: any) => {
  const validParams = [
    "fullName",
    "email",
    "joinDate",
    "description",
    "status",
    "number",
  ];
  const providedParams = Object.keys(params);
  const invalidParams = providedParams.filter(
    (param) => !validParams.includes(param)
  );
  console.log("this is the invalidParams", invalidParams);
  if (invalidParams.length > 0) {
    return `Invalid parameters provided: ${invalidParams.join(", ")}`;
  }
  return true;
};
