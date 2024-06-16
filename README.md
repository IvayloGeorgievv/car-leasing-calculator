# Car Leasing Calculator
## Overview
The Car Leasing Calculator is a web-based application that allows users to calculate the Total Leasing Cost of a car based on various parameters such as car type(New or User), car value, lease period, and down payment percentage. The calculator instantly displays Leasing details, including the Interest rate, Down Payment Amount, Monthly installment, and Total Leasing Cost.

### Features
- **Dynamic Range Sliders**: Provides dynamic range sliders for car value and down payment percentage for easy adjustments.
- **Real-time Calculations**: Updates the Leasing Details instantly as user changes the input values.
- **Responsive Design**: Ensures usability on various devices, including mobile phones.

## Approach
The Car Leasing Calculator is built using HTML, CSS and JavaScript. The approach used in the development can be summarized in the following categories:

### HTML Structure:
The HTML structure defines the layout and elements of the application, including:
- A form for the user inputs (Car Type, Car Value, Lease Period (in months), and Down Payment Percentage).
- A section to display the calculated Leasing Details (Interest Rate Percent, Down Payment, Monthly Installment, and Total Leasing Cost).

### CSS Styling
The CSS ensures that the application follows the given design and it is responsive:

- **Layout**: Uses flexbox for flexible and responsive layout.
- **Styling**: Applies consistent styling to form elements and leasing details.
- **Media Queries**: Adjusts layout for different screen sizes to ensure usability on mobile devices.

### JavaScript Functionality
The JavaScript code handles the dynamic aspects of the application:

1. **Dynamic Sliders**: Synchronizes the value of input fields with the range sliders.
    - Listens to changes on sliders and input fields to update corresponding elements.
  
2. **Validation**: Validates 'Car Value' and 'Down Payment Percentage' inputs to ensure they are within the specified range.
    - Alerts the user if the values are outside the allowed range and resets them to the nearest valid value.
  
3. **Leasing Details Calculations**: Calculates and updates the leasing details based on user inputs.
    - **Interest Rate Calculation**: Sets the 'Interest rate' based on 'Car type'.
    - **Down Payment Calculation**: Computes the 'Down payment amount' based on 'Car value' and 'Down payment percentage'.
    - **Monthly Installment Calculation**: Uses the formula for an annuity to calculate 'Monthly installment'.
    - **Total Leasing Cost Calculation**: Adds the total loan payments and down payment to get the total leasing cost.

### Usage
To use the Car Leasing Calculator, follow these steps:

1. Select the car type (Brand New or Used).
2. Enter the car value or adjust the slider to set the car value within the range of €10,000 to €200,000.
3. Select the lease period from the dropdown menu (12 to 60 months).
4. Enter the down payment percentage or adjust the slider to set the percentage within the range of 10% to 50%.
5. The leasing details will be updated in real-time as you adjust the inputs.

By following this approach, the Car Leasing Calculator provides an intuitive and interactive way for users to estimate their car leasing costs accurately.
