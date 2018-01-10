import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const Navigator = StackNavigator({
  login: {
    screen: LoginForm,
    navigationOptions: {
      title: 'Please Login'
    }
  },
  employees: {
    screen: EmployeeList,
    navigationOptions: {
      title: 'Employees'
    }
  },
  employeeCreate: {
    screen: EmployeeCreate,
    navigationOptions: {
      title: 'Create Employee'
    }
  },
  employeeEdit: {
    screen: EmployeeEdit,
    navigationOptions: {
      title: 'Edit Employee'
    }
  }
});

export default Navigator;
