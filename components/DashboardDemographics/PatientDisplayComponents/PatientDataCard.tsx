import { SingleField } from "@/components/SingleField";

interface Props {
  firstName: string | undefined;
  midInitial: string | undefined;
  lastName: string | undefined;
  dateOfBirth: string | undefined;
}

export const PatientDataCard = ({
  firstName,
  midInitial,
  lastName,
  dateOfBirth,
}: Props) => {
  return (
    <div className="flex flex-col h-full w-[50%] py-8 items-center border-2 border-white m-4 rounded-2xl">
      <div className="space-y-2">
        <SingleField
          fieldNameStyles="text-blue-500"
          fieldName="First Name"
          fieldValue={firstName}
        />
        <SingleField
          fieldNameStyles="text-blue-500"
          fieldName="Middle Initial"
          fieldValue={midInitial}
        />
        <SingleField
          fieldNameStyles="text-blue-500"
          fieldName="Last Name"
          fieldValue={lastName}
        />
        <SingleField
          fieldNameStyles="text-blue-500"
          fieldName="Date of Birth"
          fieldValue={dateOfBirth}
        />
      </div>
    </div>
  );
};
