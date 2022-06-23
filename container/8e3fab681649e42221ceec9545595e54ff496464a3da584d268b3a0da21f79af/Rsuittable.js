
export const Rsuittable = () => {
  const [fakeDatum] = useState(fakeData);

  return (
    <Table data={fakeDatum} height={400}>
      <Column width={100} align="center" fixed resizable>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>
      <Column width={150} align="center" fixed resizable>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="firstName" />
      </Column>
      <Column width={150} align="center" fixed resizable>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="lastName" />
      </Column>
      <Column width={200} align="center" sortable fixed resizable>
        <HeaderCell>City</HeaderCell>
        <Cell dataKey="city" />
      </Column>
      <Column width={300} align="center" sortable={true} fixed resizable>
        <HeaderCell>Street</HeaderCell>
        <Cell dataKey="street" />
      </Column>
      <Column width={300} align="center" fixed resizable>
        <HeaderCell>Company Name</HeaderCell>
        <Cell dataKey="companyName" />
      </Column>
      <Column width={200} align="center" fixed resizable>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
      <Column width={120} fixed="right">
        <HeaderCell>Action</HeaderCell>
        <Cell>
          {(rowData) => {
            function handleAction() {
              alert(`id:${rowData.id}`);
            }
            return (
              <span>
                <a onClick={handleAction}>
                  {" "}
                  <b>Edit</b>{" "}
                </a>{" "}
                |
                <a onClick={handleAction}>
                  {" "}
                  <b>Remove</b>{" "}
                </a>
              </span>
            );
          }}
        </Cell>
      </Column>
    </Table>
  );
};
