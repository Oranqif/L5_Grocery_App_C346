import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, SectionList, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6'

const grocerydata = [
  {data: [
      {item:'rice', color:'#d7cdbe', image:require('./assets/RiceGrocery.png')},
      {item:'noodle', color:'#d7cdbe', image:require('./assets/NoodleGrocery.png')},
      {item:'bread', color:'#d7cdbe', image:require('./assets/BreadGrocery.png')},
    ], category: 'carbohydrate',
      icon: 'bread-slice',
      fontColor: '#1e1e1e',
      color: '#aa9682',
      borderBottomWidth: 0,
  },
  {data: [
      {item:'egg', color:'#e1cdcd', image:require('./assets/EggGrocery.png')},
      {item:'beef', color:'#e1cdcd', image:require('./assets/BeefGrocery.png')},
      {item:'chicken', color:'#e1cdcd', image:require('./assets/ChickenGrocery.png')},
    ], category: 'protein',
      icon: 'drumstick-bite',
      fontColor: '#1e1e1e',
      color: '#9b4646',
      borderBottomWidth: 0,
  },
  {data: [
      {item:'milk', color:'#dce6e6', image:require('./assets/MilkGrocery.png')},
      {item:'cheese', color:'#dce6e6', image:require('./assets/CheeseGrocery.png')},
      {item:'yogurt', color:'#dce6e6', image:require('./assets/YogurtGrocery.png')},
    ], category: 'dairy',
      icon: 'bottle-droplet',
      fontColor: '#1e1e1e',
      color: '#b4c8c8',
      borderBottomWidth: 1,
  }
];

const GroceryList = ({item}) => {
    return(
        <View style={[styles.itemListStyle, {backgroundColor: item.color}]}>
            <View style={styles.itemStyle}>
                <Text style={styles.itemTextStyle}>{item.item}</Text>
                <Image style={{width:200,height:200}} source={item.image}/>
            </View>
            <Pressable onPress={() => Alert.alert("You added this item to the cart")}>
                <Icon style={styles.buttonTextStyle} name="cart-shopping"> Add to Cart </Icon>
            </Pressable>
        </View>
    )
}

const GroceryHeader = () => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.headerTitleStyle}>Grocer Time</Text>
            <Text style={styles.headerTextStyle}>Buy everything you can!</Text>
        </View>
    )
}

export default function App() {
    return (
        <View>
            <StatusBar hidden={true}/>
            <GroceryHeader />
            <SectionList
                contentContainerStyle={{paddingBottom: 105}}
                sections={grocerydata}
                renderItem={GroceryList}
                renderSectionHeader={
                ({section:{category, icon, fontColor, color, borderTopWidth, borderBottomWidth}}) =>
                    <Icon name={icon} style={
                        [
                            styles.categoryStyle,
                            {
                                color: fontColor,
                                backgroundColor:color,
                                borderBottomWidth: borderBottomWidth
                            }
                            ]}
                    > {category} </Icon>
            }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#6ea55a',
        borderBottomWidth: 3,
        borderColor: '#325f37',
        padding: 10
    },
    headerTitleStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    headerTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
    },
    categoryStyle: {
        textAlign: 'center',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        fontSize: 20,
        padding: 10,
    },
    itemListStyle: {
        borderWidth: 1,
        borderBottomWidth: 0,
        padding: 10,
    },
    itemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemTextStyle: {
        flex: 1,
        textTransform: 'capitalize',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        fontWeight: 'semibold',
    },
    buttonTextStyle:{
        color: 'white',
        backgroundColor: '#6ea55a',
        textAlign: 'center',
        fontSize: 12,
        padding: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 5,
    },
});
