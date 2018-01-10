import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common/';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onRowPress = this.onRowPress.bind(this);
  }
  onRowPress() {
    const navigation = this.props.navigation;
    navigation.navigate('employeeEdit', { employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
