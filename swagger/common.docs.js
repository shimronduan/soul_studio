 /**
  * @swagger
  * tags:
  *   name: Categories
  *   description: The categories managing API
  */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products managing API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Category
 *         children:
 *          type: object
 *          properties:
 *            id:
 *              type: string
 *              description: The auto-generated id of the Category
 *            children:
 *              type: array
 *              
 *       example:
 *         id: 61d572997178641e9661aba1
 *         name: category 1
 *         children: []
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the product
 *         name:
 *           type: string
 *           description: Name of the product
 *         price:
 *           type: integer
 *           description: Price of the product
 *              
 *       example:
 *         id: 61d572997178641e9661aba1
 *         name: product name
 *         price: 25
 */


