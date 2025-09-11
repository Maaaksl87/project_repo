import React from "react";

class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.fetchData(this.props.userId);
    }
  }

  fetchData(userId) {
    this.setState({ loading: true, error: null });

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Помилка при завантаженні");
        }
        return response.json();
      })
      .then((data) => this.setState({ data, loading: false }))
      .catch((error) => this.setState({ error: error.message, loading: false }));
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка: {error}</p>;

    return (
      <div>
        <h2>Дані користувача</h2>
        <p><strong>Ім’я:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Телефон:</strong> {data.phone}</p>
      </div>
    );
  }
}

export default FetchData;
