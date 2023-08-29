export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const MALE = 'm';
  const notMarriedMessage = 'I am not married';
  const personPartnerMarriageStatus = (sex === MALE)
    ? 'wife'
    : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {!!age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {!isMarried
          ? notMarriedMessage
          : `${partnerName} is my ${personPartnerMarriageStatus}`
        }
      </p>
    </section>
  );
};