import './Person.scss';

export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => (
  <section className="Person">
    <h2 className="Person__name">My name is {name}</h2>
    {typeof age === 'number' && <p className="Person__age">I am {age}</p>}
    <p className="Person__partner">
      {isMarried
        ? `${partnerName} is my ${(sex === 'm' && 'wife') || (sex === 'f' && 'husband') || 'partner'}`
        : 'I am not married'}
    </p>
  </section>
);
