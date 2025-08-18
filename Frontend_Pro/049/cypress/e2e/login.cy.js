describe("Login Form", () => {
  beforeEach(() => {
    cy.visit("/"); 
  });

  it("should load the login page correctly", () => {
    cy.contains("Login").should("be.visible"); // заголовок є
    cy.get("input[placeholder='Username']").should("be.visible"); 
    cy.get("input[placeholder='Password']").should("be.visible"); 
    cy.get("button[type='submit']").should("be.visible"); 
  });

  it("should show an error for invalid data", () => {
    cy.get("input[placeholder='Username']").type("qwerty");
    cy.get("input[placeholder='Password']").type("122332");
    cy.get("button[type='submit']").click();

    cy.on("window:alert", (text) => {
      expect(text).to.equal("Invalid username or password");
    });
  });

  it("should redirect to the dashboard on successful login", () => {
    cy.get("input[placeholder='Username']").type("admin");
    cy.get("input[placeholder='Password']").type("password");
    cy.get("button[type='submit']").click();

    cy.url().should("include", "/dashboard");
    cy.contains("Welcome to the Dashboard!").should("be.visible");
  });

 it("should handle successful login with API data", () => {
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/users", {
      statusCode: 200,
      body: [
        { id: 1, username: "Bret", name: "Leanne Graham" },
        { id: 2, username: "Antonette", name: "Ervin Howell" },
      ],
    }).as("getUsers");

    cy.get("input[placeholder='Username']").type("Bret");
    cy.get("input[placeholder='Password']").type("Leanne Graham");
    cy.get("button[type='submit']").click();

    cy.wait("@getUsers").its("response.statusCode").should("eq", 200);

    cy.url().should("include", "/dashboard");
    cy.contains("Welcome to the Dashboard!").should("be.visible");
  });

  it("should show an error for invalid data", () => {
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/users", {
      statusCode: 200,
      body: [
        { id: 1, username: "Bret", name: "Leanne Graham" },
        { id: 2, username: "Antonette", name: "Ervin Howell" },
      ],
    }).as("getUsers");

    cy.get("input[placeholder='Username']").type("otherUser");
    cy.get("input[placeholder='Password']").type("44331");
    cy.get("button[type='submit']").click();

    cy.on("window:alert", (text) => {
      expect(text).to.equal("Invalid username or password");
    });
  });
});