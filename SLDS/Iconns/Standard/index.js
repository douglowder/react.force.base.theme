const React = require('react-native');
const SLDSIconStandard = React.requireNativeComponent("SLDSIconStandard");

const iconCodes = require('./iconCodes');

const getCodeByName = (iconName) => {
  const name = iconName.toLowerCase();
  const index = iconCodes.names.indexOf(name);
  return iconCodes.codes[index];
};


module.exports = React.createClass({

  getDefaultProps(){
    return {
      size: 50,
      iconCode: "\uEA03",
      iconColor: "#54698d",
      name:'like'
    };
  },

  propTypes: {
    size: React.PropTypes.number,
    name: React.PropTypes.string,
    iconName: React.PropTypes.string,
    iconCode: React.PropTypes.string,
    iconColor: React.PropTypes.string
  },

  render () {
    return <SLDSIconStandard 
      style={{
        width: this.props.size,
        height: this.props.size
      }} 
      iconCode={getCodeByName(this.props.name)}
      iconColor={this.props.iconColor} />;
  }

});