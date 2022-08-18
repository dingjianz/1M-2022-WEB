const List = ({ list }) => {
  return <table>
    <thead>
      <th>名称</th>
      <th>名称负责人</th>
    </thead>
    <tbody>
      {
        list?.map(item => <tr key={item?.name}>
          <td>{ item?.name }</td>
          <td>{ item.personName }</td>
        </tr>)
      }
    </tbody>
  </table>
}

export default List