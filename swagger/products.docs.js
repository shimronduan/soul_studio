
/**
 * @swagger
 * /products/{product_id}:
 *  put:
 *    summary: Update the Product.
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: product_id
 *        schema:
 *          type: string
 *        required: true
 *        description: The product_id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *          properties:
 *            name:
 *              type: string
 *            price:
 *              type: integer
 *          example:
 *            name: 'product name'
 *            price: 10
 *    responses:
 *       201:
 *         description: The list of the categories
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                  type: boolean
 *                  example: true
 *                 data:
 *                  type: object
 *                  properties:
 *                      id:
 *                        type: string
 *                        example: 61d58e85fd5589b85cc32353
 *                      name:
 *                        type: string
 *                        example: category 123
 *                      price:
 *                        type: integer
 *                        example: 10
 *                      
 */


/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new Product
 *     tags: [Products]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *          properties:
 *            name:
 *              type: string
 *            price:
 *              type: integer
 *            categories:
 *              type: array
 *          example:
 *            name: 'product 123'
 *            price: 10
 *            categories: ["61d58e85fd5589b85cc32353"]
 *     responses:
 *       201:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 61d58e85fd5589b85cc32353
 *                 name:
 *                   type: string
 *                   example: category 123
 *                 success:
 *                   type: boolean
 *                   example: true
 */