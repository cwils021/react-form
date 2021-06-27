/*********************************************************************************
*                              Author: Chris Wilson                              *
*                          Source Language: javascript                           *
*                                                                                *
*                            --- Code Description ---                            *
*                            Constants for react-form                            *
*********************************************************************************/

export const roles = ["Select a Role","Customer Success", "Fullstack Engineer", "Product Manager"];

export const industries = ["Select an Industry","Accounting", "Software development", "Landscaping"];

export const selectionStrings = ['Select...', 'Yes', 'No'];

export const Schema = {
	"$schema": "http://json-schema.org/draft-07/schema#",
	"$id": "#/jobPost.Schema.json",
	"title": "FormValidationSchema",
	"type": "object",
	"properties": {
		"company_name": {
			"title": "company_name",
			"type": "string",
			"minLength": 1,
			"maxLength": 2000
		},
		"role": {
			"title": "role",
			"enum": ["Customer Success", "Fullstack Engineer", "Product Manager"]
		},
		"industry": {
			"title": "industry",
			"enum": ["Accounting", "Software development", "Landscaping"]
		}
	},
	"allOf": [
		{
			"if": {
				"properties": { "role": { "const": "Fullstack Engineer" } }
			},
			"then": {
				"properties": {
					"technical_requirement": {
						"enum": ['Yes', 'No'],
						"title": "technical_requirement"
					}
				},
				"required": ["technical_requirement"]
			}
		},
		{
			"if": {
				"properties": {
					"role": { "const": "Product Manager" },
					"industry": { "const": "Software development" }
				}
			},
			"then": {
				"properties": {
					"technical_requirement": {
						"enum": ['Yes', 'No'],
						"title": "technical_requirement"
					}
				},
				"required": ["technical_requirement"]
			}
		}
	],
	"required": [
		"company_name",
		"role",
		"industry"
	]
};

export const validTestPost = {
	company_name: "ABC Company Inc.",
	role: "Fullstack Engineer",
	industry: "Software development",
	technical_requirement: "Yes"
};

export const invalidTestPost = {
	company_name: "ABC Company Inc.",
	role: "Fullstack Engineer",
	industry: "Software development",

};
