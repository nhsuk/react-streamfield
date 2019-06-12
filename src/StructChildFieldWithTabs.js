import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
  getNestedBlockDefinition, structValueToObject,
  getDescendantsIds, replaceWithComponent, isNA,
  isStruct,
} from './processing/utils';
import StructChildField from './StructChildField';


@connect((state, props) => {
  const {fieldId, blockId} = props;
  const fieldData = state[fieldId];
  const blocks = fieldData.blocks;
  const block = blocks[blockId];
  const blockDefinition = getNestedBlockDefinition(state, fieldId, blockId);
  const hasDescendantError = getDescendantsIds(state, fieldId, blockId, true)
    .some(descendantBlockId => blocks[descendantBlockId].hasError);
  const value = block.value;
  return {
    blockDefinition,
    html: block.html,
    value: structValueToObject(state, fieldId, value),
  };
})
class StructChildFieldWithTabs extends React.Component {
  static propTypes = {
    fieldId: PropTypes.string.isRequired,
    blockId: PropTypes.string.isRequired,
  };

  get_title(tabDefinition) {
    const {blockDefinition, value} = this.props;
    if ((tabDefinition.label !== undefined) && (tabDefinition.label !== null)) {
      return tabDefinition.label;
    }
    if (tabDefinition.titleTemplate !== undefined) {
      let hasVariables = false;
      let isEmpty = true;
      let renderedTitle = tabDefinition.titleTemplate.replace(
        /\${([^}]+)}/g, (match, varName) => {
          if (isStruct(blockDefinition)) {
            let childValue = value[varName];
            if (isNA(childValue)) {
              childValue = '';
            } else if (childValue !== '') {
              isEmpty = false;
            }
            hasVariables = true;
            return childValue || '';
          } else {
            if (varName === blockDefinition.key) {
              return value || '';
            }
            return '';
          }
        });
      if (!hasVariables || !isEmpty) {
        return renderedTitle;
      }
    }
    return null;
  }

  render() {
    const {fieldId, blockDefinition, blockId} = this.props;

    const tabList = blockDefinition.tabs.map(
        tabDefinition => <Tab key={'tab-list-'+tabDefinition.key}>{this.get_title(tabDefinition)}</Tab>
    );

    const tabPanel = blockDefinition.tabs.map(
        tabDefinition => <TabPanel key={'tab-panel-'+tabDefinition.key}>
            {blockDefinition.children.filter(child => tabDefinition.fields.includes(child.key)).map(
                childBlockDefinition =>
                    <StructChildField key={childBlockDefinition.key} fieldId={fieldId}
                                    parentBlockId={blockId}
                                    type={childBlockDefinition.key}
                                    collapsible={childBlockDefinition.collapsible} />
            )}
        </TabPanel>
    );

    return (
      <div className="c-sf-block__content">
        <Tabs>
            <TabList>
                {tabList}
            </TabList>

            {tabPanel}
        </Tabs>
      </div>
    );
  }
}


export default StructChildFieldWithTabs;
