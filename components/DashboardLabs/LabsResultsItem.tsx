interface Props {
  encounterNumber: string;
  labName: string;
  testName: string;
  testDate: string;
  result1: string;
  result2: string;
  result3: string;
  result4: string;
  result5: string;
  result6: string;
  result7: string;
  result8: string;
  index: number;
  resultDate: string;
}

export const LabsResultsItem = ({
  encounterNumber,
  index,
  labName,
  testName,
  testDate,
  result1,
  result2,
  result3,
  result4,
  result5,
  result6,
  result7,
  result8,
  resultDate,
}: Props) => {
  return (
    <main className="flex flex-col">
      <section className="flex py-6 pl-6 text-2xl space-x-4">
        <p>{index + 1}:</p>
        <div className="flex">
          <span className="mr-4 dark:text-neutral-400">Encounter Number:</span>
          <p>{encounterNumber}</p>
        </div>
        <div className="flex">
          <span className="mr-4 dark:text-neutral-400">Lab Name:</span>
          <p>{labName}</p>
        </div>
        <div className="flex">
          <span className="mr-4 dark:text-neutral-400">Test Name:</span>
          <p>{testName}</p>
        </div>
        <div className="flex">
          <span className="mr-4 dark:text-neutral-400">Test Date:</span>
          <p>{testDate}</p>
        </div>
        <div className="flex">
          <span className="mr-4 dark:text-neutral-400">Result Date:</span>
          <p>{resultDate}</p>
        </div>
      </section>
      <section className="flex flex-col w-full">
        <h3 className="text-3xl text-center">Results</h3>
        <div className="flex">
          <div className="w-[50%] text-2xl">
            <div className="space-y-4 w-full p-6">
              <div className="flex">
                <span className="mr-4">Result 1:</span>
                <p>{result1}</p>
              </div>
              <div className="flex">
                <span className="mr-4">Result 2:</span>
                <p>{result2}</p>
              </div>
              <div className="flex">
                <span className="mr-4">Result 3:</span>
                <p>{result3}</p>
              </div>
              <div className="flex">
                <span className="mr-4">Result 4:</span>
                <p>{result4}</p>
              </div>
            </div>
          </div>
          <div className="w-[50%] text-2xl">
            <div className="space-y-4 w-full p-6">
              <div className="flex">
                <span className="mr-4">Result 5:</span>
                <p>{result5}</p>
              </div>
              <div className="flex">
                <span className="mr-4">Result 6:</span>
                <p>{result6}</p>
              </div>
              <div className="flex">
                <span className="mr-4">Result 7:</span>
                <p>{result7}</p>
              </div>
              <div className="flex">
                <span className="mr-4">Result 8:</span>
                <p>{result8}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
