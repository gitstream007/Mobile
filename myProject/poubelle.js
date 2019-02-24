import ConstantsColorsCodes from "./ConstantsColorsCodes";
import {Grid, Row} from "react-native-easy-grid";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import QuestionsView from "./Views/QuestionScreen";
import {FlatGrid} from "react-native-super-grid";
const items = [
    { name: this.state.data.Answer1, code: ConstantsColorsCodes.INCORRECT_RED }, { name: this.state.data.Answer2, code: ConstantsColorsCodes.MY_BLUE },
    { name: this.state.data.Answer3, code: ConstantsColorsCodes.MY_ORANGE }, { name: this.state.data.Answer4, code: ConstantsColorsCodes.CORRECT_GREEN },
];
return (
    <Grid style={styles.grid}>
        <Row>
            <TouchableOpacity  style={styles.test0}>
                <View style={styles.questionView}>
                    <QuestionsView/>
                </View>
            </TouchableOpacity>
        </Row>
        <Row>
            <FlatGrid
                data = { this.state.data}
                itemDimension={130}
                items={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                // spacing={20}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => this.handleClick(item.name)}>
                        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </Row>
    </Grid>
);
{/*<View style={{flex: 1, paddingTop:20}}>
    <FlatList
        data={this.state.data}
        renderItem={({item}) => <Text>{item.questionLabel}, {item.password}</Text>}
        keyExtractor={({id}, index) => id}
    />
</View>*/}
